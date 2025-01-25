export interface PortfolioItemDetails{
  client:string;
  director:string;
}
export interface PortfolioCommon{
  videPath:string;
  title:string;
  key:string;
  active:boolean;
  slug:string;
}
export interface PortfolioItem extends PortfolioCommon {
  more_videos?: string[];
  details?: PortfolioItemDetails;
  suggested_video ?:PortfolioCommon
}