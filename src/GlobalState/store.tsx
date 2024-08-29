import {create} from "zustand";

type State = {

  SidebarTranslate: string,
  HeaderWidth: string,
  PersonDetailsWidth:string,
  LeaderBoardWidth:string,
  RankingWidth:string,
  CommunityWidth:string,
  changeHeaderWidth: (id: string) => void,
  changePersonDetailsWidth: (id: string) => void,
  changeLeaderBoardWidth: (id: string) => void,
  changeRankingWidth: (id: string) => void,
  changeCommunityWidth: (id: string) => void,
  changeSidebar: (id: string) => void;

};

export const useStore = create<State>((set) => ({
  SidebarTranslate: "-100%",
  HeaderWidth:"100%",
  PersonDetailsWidth:"100%",
  LeaderBoardWidth:"70%",
  RankingWidth:"25%",
  CommunityWidth:"100%",
  changeHeaderWidth: (id: string) => set({ HeaderWidth: id }),
  changePersonDetailsWidth: (id: string) => set({ PersonDetailsWidth: id }),
  changeLeaderBoardWidth: (id: string) => set({ LeaderBoardWidth: id }),
  changeRankingWidth: (id: string) => set({ RankingWidth: id }),
  changeCommunityWidth: (id: string) => set({ CommunityWidth: id }),
  changeSidebar: (id: string) => set({ SidebarTranslate:id }),
}));
