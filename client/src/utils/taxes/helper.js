export const getTotalTaxesPaid = (individualTaxItems) => {
    return individualTaxItems.reduce((total, taxItem) => {
        return total + taxItem.amount
    }, 0)
}
