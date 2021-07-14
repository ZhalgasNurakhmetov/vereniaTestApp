import {Project} from '../../core/project-list.model';

export class SetFavoriteProject {
  static readonly type = '[App] Set Favorite Project';
  constructor(public project: Project) { }
}

export class ResetFavoriteProjectList {
  static readonly type = '[App] Reset Favorite Project List';
  constructor(public projectList: Project[]) { }
}
