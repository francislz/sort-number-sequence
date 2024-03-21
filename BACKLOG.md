# Sort the number sequences

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## 🔖 BACKLOG

### ⚠ US 1 - Obtain the zero-terminated sub sequences

- ⚠ UAT 1.1 - Given the sequence [3,2,1,0], Then I should get only 1 sub sequence [3,2,1,0]
- ⚠ UAT 1.2 - Given the sequence [3,2,1,0,5,6,4,0], Then I should get only 2 sub sequences [3,2,1,0] and [5,6,4,0]
- ⚠ UAT 1.3 - Given the sequence [3,2,1,0,5,6,4,0,1,5,3,0], Then I should get only 3 sub sequences [3,2,1,0], [5,6,4,0] and [1, 5, 3,0]
- ⚠ UAT 1.4 - Given the sequence [3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0], Then I should get only 4 sub sequences [3,2,1,0], [5,6,4,0], [1, 5, 3,0] and [4, 2, 8, 0]

### ⚠ US 2 - Sort in ascending order each subsequence of a given set, ignoring the zero at the end

- ⚠ UAT 2.1 - Given the sub sequence [3,2,1,0], Then I should get the sorted sub sequence [1,2,3,0]
- ⚠ UAT 2.2 - Given the sub sequences [3,2,1,0] and [5,6,4,0], Then I should get 2 sorted sub sequences [1,2,3,0] and [4,5,6,0]
- ⚠ UAT 2.3 - Given the sub sequences [3,2,1,0],[5,6,4,0] and [1,5,3,0], Then I should get 3 sorted sub sequences [1,2,3,0], [4,5,6,0] and [1,3,5,0].
- ⚠ UAT 2.3 - Given the sub sequences [3,2,1,0],[5,6,4,0],[1,5,3,0] and [4,2,8,0], Then I should get 4 sorted sub sequences [1,2,3,0],[4,5,6,0],[1,3,5,0] and [2,4,8,0].

### ⚠ US 3 - Sort in ascending order the order of the subsequences for a given set using the sub sequence sum

- ⚠ UAT 3.1 - Given the sub sequence [3,2,1,0], Then I should get the sorted sub sequence [1,2,3,0]
- ⚠ UAT 3.2 - Given the sub sequences [3,2,1,0] and [5,6,4,0], Then I should get the sorted sub sequences [1,2,3,0], [4,5,6,0]
- ⚠ UAT 3.3 - Given the sub sequences [3,2,1,0], [5,6,4,0] and [1,5,3,0], Then I should get the sorted sub sequences [1,2,3,0], [1,3,5], [4,5,6,0]

### ⚠ US 4 - Given a set of sub sequences I want to combine then in a single sequence

- ⚠ UAT 4.1 - Given the sub sequence [1,2,3,0]. Then the combined sequence should be [1,2,3,0]
- ⚠ UAT 4.2 - Given the sub sequences [1,2,3,0],[4,5,6,0]. Then the combined sequence should be [1,2,3,0,4,5,6,0]
- ⚠ UAT 4.3 - Given the sub sequences [1,2,3,0],[4,5,6,0],[1,3,5,0]. Then the combined sequence should be [1,2,3,0,4,5,6,0,1,3,5,0]
