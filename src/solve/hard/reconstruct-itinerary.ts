/**
 * 332. Reconstruct Itinerary (Hard)
 * 
 * You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one ticket. Reconstruct the itinerary in order and return it.
 * All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
 * 
 * Example:
 * Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * Output: ["JFK","MUC","LHR","SFO","SJC"]
 */

/**
 * 332. 여정 재구성 (Hard)
 *
 * 항공권 목록이 주어지며, 여기서 tickets[i] = [fromi, toi]는 한 항공권의 출발 및 도착 공항을 나타냅니다. 여정을 순서대로 재구성하여 반환합니다.
 * 모든 항공권은 "JFK"에서 출발하는 한 남자의 소유이므로 여정은 "JFK"로 시작해야 합니다. 유효한 여정이 여러 개인 경우 단일 문자열로 읽을 때 사전순으로 가장 작은 여정을 반환해야 합니다.
 *
 * 예시:
 * 입력: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
 * 출력: ["JFK","MUC","LHR","SFO","SJC"]
 */

function findItinerary(tickets: string[][]): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])); 
// Expected: ["JFK","MUC","LHR","SFO","SJC"]
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])); 
// Expected: ["JFK","ATL","JFK","SFO","ATL","SFO"]