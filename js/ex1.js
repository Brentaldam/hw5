const side1 = prompt('Enter length for a side of the first square: ');
const side2 = prompt('Enter length for a side of the second square: ');
const side3 = prompt('Enter length for a side of the third square: ');

function perimeter(side)
{    
    side = side * 4;
    return side;
}

function area(side)
{
    side = Math.pow(side, 2);
    return side;
}

function diagonal(side)
{
    side = Math.sqrt(2 * Math.pow(side, 2));
    return side;
}

function describe(side1, side2, side3)
{
    console.log(`Square 1 with a side of ${side1} has a perimeter of ${perimeter(side1)}, area of ${area(side1)}, and diagonal of ${(diagonal(side1)).toFixed(3)}`)
    console.log(`Square 2 with a side of ${side2} has a perimeter of ${perimeter(side2)}, area of ${area(side2)}, and diagonal of ${(diagonal(side2)).toFixed(3)}`)
    console.log(`Square 3 with a side of ${side3} has a perimeter of ${perimeter(side3)}, area of ${area(side3)}, and diagonal of ${(diagonal(side3)).toFixed(3)}`)
}

describe(side1, side2, side3);