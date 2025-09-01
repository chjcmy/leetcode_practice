/**
 * 355. Design Twitter (Medium)
 * 
 * Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
 * Implement the Twitter class:
 * - Twitter() Initializes your twitter object.
 * - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
 * - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
 * - void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
 * - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.
 * 
 * Example:
 * Input: ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
 *        [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
 * Output: [null, null, [5], null, null, [6, 5], null, [5]]
 */

/**
 * 355. 트위터 디자인 (Medium)
 *
 * 사용자가 트윗을 게시하고, 다른 사용자를 팔로우/언팔로우하고, 사용자의 뉴스 피드에서 가장 최근 10개의 트윗을 볼 수 있는 단순화된 버전의 트위터를 디자인합니다.
 * Twitter 클래스를 구현합니다:
 * - Twitter() 트위터 객체를 초기화합니다.
 * - void postTweet(int userId, int tweetId) 사용자 userId가 ID가 tweetId인 새 트윗을 작성합니다. 이 함수에 대한 각 호출은 고유한 tweetId로 이루어집니다.
 * - List<Integer> getNewsFeed(int userId) 사용자의 뉴스 피드에서 가장 최근 10개의 트윗 ID를 검색합니다. 뉴스 피드의 각 항목은 사용자가 팔로우한 사용자 또는 사용자 자신이 게시해야 합니다. 트윗은 가장 최근 것부터 가장 오래된 것 순으로 정렬되어야 합니다.
 * - void follow(int followerId, int followeeId) ID가 followerId인 사용자가 ID가 followeeId인 사용자를 팔로우하기 시작했습니다.
 * - void unfollow(int followerId, int followeeId) ID가 followerId인 사용자가 ID가 followeeId인 사용자를 언팔로우하기 시작했습니다.
 *
 * 예시:
 * 입력: ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
 *        [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
 * 출력: [null, null, [5], null, null, [6, 5], null, [5]]
 */

class Twitter {
    constructor() {
        // 여기에 구현하세요
    }

    postTweet(userId: number, tweetId: number): void {
        // 여기에 구현하세요
    }

    getNewsFeed(userId: number): number[] {
        // 여기에 구현하세요
        return [];
    }

    follow(followerId: number, followeeId: number): void {
        // 여기에 구현하세요
    }

    unfollow(followerId: number, followeeId: number): void {
        // 여기에 구현하세요
    }
}

// Test cases
const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // Expected: [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // Expected: [6, 5]