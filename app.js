
/////////Task 1
const numberArrays = [2, 4, 6, 8, 10, 12]

numberArrays.unshift(12)
numberArrays.pop(12)

console.log(numberArrays)

//////////Task 2
const product = [
    {
        productTitle:"",
        productPrice:"",
        property:"",
    },
    {
        productTitle:"",
        productPrice:"",
        property:"",
    },
    {
        productTitle:"",
        productPrice:"",
        property:"",
    }
]
console.log(product)
/////////task 3
const numbers = [ 3, 1, 12, 15, 7,];

const numbersMult = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
const numbersLength = numbers.length;

const numberDiv = numbersMult / numbersLength

console.log(numberDiv)

//////////task 4
const properties= {
    phoneName:"xiaomi redmi note 8t",
    phoneDescription:"Size, 6.3 inches, 97.4 cm2. . .",
    phonePrice:764.35,
    shopAddresses: 'თბილისი ცენტრალი - lll სართული,თბილისი,საქართველო',
    phoneMemoryInGB:256
}
console.log(properties)
/////////////task 5

console.log( "Phone name is",(properties.phoneName),", phone price is",(properties.phonePrice),"and you can buy it at",(properties.shopAddresses) )