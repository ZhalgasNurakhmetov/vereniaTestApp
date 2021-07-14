import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Project} from '../../core/project-list.model';
import {AppState} from '../../store/state';
import {Select} from '@ngxs/store';
import {takeUntil} from 'rxjs/operators';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {ResetFavoriteProjectList} from '../../store/state/app.actions';
import {ProjectListService} from '../../services/project-list/project-list.service';

@Component({
  templateUrl: './favorites.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesPage implements OnInit, OnDestroy {

  @Select(AppState.projectList) projectList$: Observable<Project[]>;

  fullProjectList: Project[];
  filteredProjectList: Project[];
  languageList = [];

  isShowFullProjectList = true;

  private unsubscribe$ = new Subject();

  @Dispatch() setFavoriteProjectList = (projectList: Project[]) => new ResetFavoriteProjectList(projectList);

  constructor(
    private projectListService: ProjectListService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.subscribeToProjectList();
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

  removeFromFavorites(project: Project): void {
    this.fullProjectList = this.fullProjectList.filter(favorite => favorite.id !== project.id);
    this.setFavoriteProjectList(this.fullProjectList);
    alert('Успешно удалено');
    this.showFullProjectList(true);
  }

  private subscribeToProjectList(): void {
    this.projectList$
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(projectList => {
        this.fullProjectList = projectList;
        this.setLanguages(projectList);
        this.cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
