interface PersonInformation {
    Name: string;
    Nickname: string;
    Bio: string;
    Interest:string
  }
  
  interface SocialMediaDetail {
    Name: string;
    Followers: string;
    NetGainFollowers: string;
    Following: string;
    NetGainFollowing: string;
    Posts: string;
    NetGainPost: string;
  }
  
  interface SocialMediaDetailsProps {
    Person_information: PersonInformation;
    Social_Media_Details: SocialMediaDetail;
  }
 interface leaderBoard {
    Name: string;
    Drops_Enrolled: number;
    Drops_Completed: number;
    Coins_Earned: number;
    Rank: number;
}