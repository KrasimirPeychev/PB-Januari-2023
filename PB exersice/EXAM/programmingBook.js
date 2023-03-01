function programmingBook(input) {       

        let pagePrice = Number(input[0]);
        let coverPrice = Number(input[1]);
        let discount = Number(input[2]);
        let designerPrice = Number(input[3]);
        let teamPercent = Number(input[4]);

        let bookPrice = pagePrice * 899 + coverPrice * 2;
        let discountSum = bookPrice *(discount / 100);
        let bookSum = bookPrice - discountSum + designerPrice;
        let percentSum = bookSum * (teamPercent / 100);
        let finalSum = bookSum - percentSum;
           
        

        console.log(`Avtonom should pay ${finalSum.toFixed(2)} BGN.`);     

}

programmingBook([0.01, 1, 10, 20, 20]);

