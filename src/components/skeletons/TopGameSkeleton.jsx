import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function TopGameSkeleton() {
    return (
        <li className="top__list__game">
             <SkeletonTheme baseColor="#2c394d" highlightColor="#232d3d">
            <Skeleton height={140} width={300} />
            <div className="game__content">
                <div className="game__text">
                    <Skeleton height={20} width={300}/>
                    <Skeleton className="game__count"width={62} height={20}/>
                </div>
                <Skeleton className={'game__likeButton'} width={80} height={30}></Skeleton>
            </div>
            </SkeletonTheme>
        </li>

    )
}