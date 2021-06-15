import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{User} from './user';
import{Repository} from './repository';
@Injectable({
  providedIn: 'root'
})
export class SearchGithubService {
user!: User;
repository!: Repository;
repoData! : [];
  constructor(private http: HttpClient) {
    this.user = new User("",0,"","",new Date());
    this.repository= new Repository("","",new Date(),"","");
   }
   getUserData(username: string){
     interface ApiResponse {
       bio: string,
       public_repos: number,
       login:string,
       avator_url:string,
       created_at:Date,
     }
     let prom
   }
}
 