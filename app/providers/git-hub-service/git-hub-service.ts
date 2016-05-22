import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

/*

*/
@Injectable()
export class GitHubService {
  data: any = null;

  constructor(private http: Http) {

  }

  getRepos(username) {
    let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
    return repos;
  }

}

