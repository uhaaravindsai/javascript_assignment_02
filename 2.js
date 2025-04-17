function findLongestPalindrome(s) {
  let res = "";
  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) l--, r++;
    return s.slice(l + 1, r);
  };
  for (let i = 0; i < s.length; i++) {
    let p1 = expand(i, i);
    let p2 = expand(i, i + 1);
    if (p1.length > res.length) res = p1;
    if (p2.length > res.length) res = p2;
  }
  return res;
}
console.log(findLongestPalindrome("racecar"));           
console.log(findLongestPalindrome("madam"));
