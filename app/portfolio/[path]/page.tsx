import PortfolioView from "./components/PortfolioView";
interface PageProps{
    params:Promise<{ path: string }>
}
export default async function Page({
    params
}:PageProps){
    const path = (await params).path
    return<PortfolioView slug={path} />
}