function mergeSortedLists(list1, list2) {
    let result = [];
    let i = 0, j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            result.push(list1[i]);
            i++;
        } else {
            result.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        result.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        result.push(list2[j]);
        j++;
    }

    return result;
}

let list1 = [1, 3, 5, 7];
let list2 = [2, 4, 6, 8];

console.log(mergeSortedLists(list1, list2));
```

Kodni ishlatish uchun quyidagilarni amalga oshiring:

1. `list1` va `list2` deyarli sorted ro'yxatlarni tanlang.
2. `mergeSortedLists` funksiyasiga `list1` va `list2` ro'yxatlarni berib, natijani konsolga chiqaring.
