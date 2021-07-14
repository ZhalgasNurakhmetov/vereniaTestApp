import { Injectable } from '@angular/core';
import {Project} from '../../core/project-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor() { }

  setLanguages(projectList: Project[]): string[] {
    const languageSet = new Set<string>();
    projectList.forEach(project => {
      if (project.language) {
        languageSet.add(project.language);
      }
    });
    return [...languageSet];
  }

  filterProjectList(fullProjectList: Project[], language: string): Project[] {
    const filteredProjectList: Project[] = [];
    fullProjectList.forEach(project => {
      if (project.language === language) {
        filteredProjectList.push(project);
      }
    });
    return filteredProjectList;
  }
}
