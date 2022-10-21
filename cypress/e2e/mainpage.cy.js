describe('Mainpage check', () => {
  before(function() {
    cy.visit("/")
  })

  it("verify the status of the site", function() {
    cy.request("/").should(function(response) {
      expect(response.status).to.eq(200)
    })
  })
})