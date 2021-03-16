describe("Homepage", function () {
  it("Should display don8", function (){
    cy.visit('http://localhost:3000')
    cy.contains('don8')
  })
})