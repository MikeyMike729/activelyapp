import {Page, NavController} from 'ionic-angular';  
import {GitHubService} from './providers/git-hub-service/git-hub-service';
import {GooglePlacesProvider} from './providers/google-places-provider/google-places-provider';

@Page({
    templateUrl: 'build/index.html',
    providers: [GooglePlacesProvider, GitHubService]
})
export class Index {  
    public foundRepos;
    public username;
    public foundPlaces
    public query;

    constructor(private github: GitHubService,
                private googleplaces: GooglePlacesProvider,
                private nav: NavController) {
    }

    getRepos() {
      this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
      );
    }
    
    
    getPlaces() {
      this.googleplaces.getPlaces(this.query)
        .map(response => response.json().results) 
        .subscribe(
            data => this.foundPlaces = data,
            error => console.log(error)
        );
      

    }

}