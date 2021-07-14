import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AppStateModel} from './app.state.model';
import {Project} from '../../core/project-list.model';
import {ResetFavoriteProjectList, SetFavoriteProject} from './app.actions';

const defaultAppState = (): AppStateModel => {
  return {
    projectList: [],
  };
};

@State<{}>(
  {
    name: 'app',
    defaults: defaultAppState(),
  }
)
@Injectable()
export class AppState {

  @Selector()
  static projectList(state: AppStateModel): Project[] {
    return state.projectList;
  }

  @Action(SetFavoriteProject)
  setFavoriteProject({patchState, getState}: StateContext<AppStateModel>, {project}: SetFavoriteProject) {
    const projectList = getState().projectList;
    patchState({
      projectList: [
        ...projectList,
        project,
      ],
    });
  }

  @Action(ResetFavoriteProjectList)
  resetFavoriteProjectList({patchState}: StateContext<AppStateModel>, {projectList}: ResetFavoriteProjectList) {
    patchState({
      projectList: [...projectList],
    });
  }
}
