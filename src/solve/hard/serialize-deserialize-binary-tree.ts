/**
 * 297. Serialize and Deserialize Binary Tree (Hard)
 * 
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * 
 * Example:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
 */

/**
 * 297. 이진 트리 직렬화 및 역직렬화 (Hard)
 *
 * 직렬화는 데이터 구조나 객체를 비트 시퀀스로 변환하여 파일이나 메모리 버퍼에 저장하거나, 나중에 동일하거나 다른 컴퓨터 환경에서 재구성할 수 있도록 네트워크 연결 링크를 통해 전송하는 프로세스입니다.
 *
 * 이진 트리를 직렬화하고 역직렬화하는 알고리즘을 설계하세요. 직렬화/역직렬화 알고리즘의 작동 방식에는 제한이 없습니다. 이진 트리를 문자열로 직렬화할 수 있고 이 문자열을 원래 트리 구조로 역직렬화할 수 있도록 보장하기만 하면 됩니다.
 *
 * 예시:
 * 입력: root = [1,2,3,null,null,4,5]
 * 출력: [1,2,3,null,null,4,5]
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function serialize(root: TreeNode | null): string {
    // 여기에 구현하세요
    return "";
}

function deserialize(data: string): TreeNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const serialized = serialize(tree);
console.log("Serialized:", serialized);
const deserialized = deserialize(serialized);
console.log("Deserialized tree root value:", deserialized?.val);