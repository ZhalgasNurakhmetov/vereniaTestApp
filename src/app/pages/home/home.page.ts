import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';
import {HomePageApi} from './api/home-page.api';
import {Project} from '../../core/project-list.model';
import {Subject} from 'rxjs';
import {SetFavoriteProject} from '../../store/state/app.actions';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {ProjectListService} from '../../services/project-list/project-list.service';

@Component({
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, OnDestroy {

  searchText = new FormControl('');
  fullProjectList: Project[];
  filteredProjectList: Project[];
  languageList = [];

  isShowFullProjectList = true;

  private unsubscribe$ = new Subject();

  @Dispatch() setFavoriteProject = (project: Project) => new SetFavoriteProject(project);

  constructor(
    private homePageApi: HomePageApi,
    private projectListService: ProjectListService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.subscribeToSearchText();
  }

  addToFavorites(project: Project): void {
    this.setFavoriteProject(project);
    alert('Успешно добавлено');
  }

  setLanguages(projectList: Project[]): void {
    this.languageList = this.projectListService.setLanguages(projectList);
  }

  filterProjectList(language: string): void {
    this.filteredProjectList = this.projectListService.filterProjectList(this.fullProjectList, language);
    this.showFullProjectList(false);
  }

  showFullProjectList(isShow: boolean): void {
    this.isShowFullProjectList = isShow;
    if (isShow) {
      this.filteredProjectList = [];
    }
    this.cd.markForCheck();
  }

  private subscribeToSearchText(): void {
    this.searchText.valueChanges
      .pipe(
        debounceTime(1000),
        filter(text => {
          return text !== '';
        }),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(text => {
        this.getProjectList(text);
      });
  }

  private getProjectList(searchText: string): void {
    this.homePageApi.getProjectList(searchText)
      .subscribe(projectList => {
        this.fullProjectList = projectList.items;
        this.setLanguages(projectList.items);
        this.cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
