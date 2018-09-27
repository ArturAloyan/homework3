const f1 = function (a, g, c) {
	const z = a * g + c
  return z;
};
console.log(f1(1, 2, 3));

const f2 = function(){
  const m = 456
	return m;
};
console.log(f2());

const f3 = function(ar1, ar2){
	const d = (ar1 * ar2)/2;
};
console.log(f3(10,15));
//A function that takes three strings and returns the string that is the longest
const f4 = function (str1, str2, str3) {
	if (str1.length > str2.length && str1.length > str3.length){
    return str1,length;
	}
	else if (str2.length > str1.length && str2.length > str3.length){
    return str2.length;
	}
	else {
    return str3.length;
	}
};
console.log(f4("Ara", "Ashot", " Artashes"));


const f5 = function(nu1, nu2){
    if (nu1 === nu2){
    	const n = 0;
      return n;
    }
    else if (nu1 > nu2){
      const n2 = 1
    	return n2;
    }
    else {
      const n3 = '-1'
    	return n3;
    }
};
console.log(f5(10, 20))

const f6 = function (mu1, mu2){
	const z =(mu1*mu2);
	return z;
};
console.log(f6(4, 5));

const f7 = function (di1, di2){
	const m =(di1/di2);
	return m;
};
console.log(f7(1,5))


const triangleArea = function(base, height){
	const k = (base*height)/2;
	return k;
};
console.log(triangleArea(4, 5));



const numLength = function(art){
    return art.length;
};
console.log(numLength("185"));


const f50 = function(strt1, strt2, c) {
	const z = strt1.length + strt2.length
    if (z > c){
       return "1";
    }
    else {
    	return "-1"
    }
};
console.log (f50('Arman', 'Joe', 45));


const runStaff = function  (no1, no2, string1){
    if (string1 === 'rectangle'){
    	const rec = no1 * no2;
    	return rec;
    }
    else if(string1 === 'triangle'){
    	const triangleArea = (no1 * no2)/2;
    	return triangleArea;
    }
    else {
    	return '-1';
    }
};
console.log(runStaff(8, 9 ,'rectangle'));