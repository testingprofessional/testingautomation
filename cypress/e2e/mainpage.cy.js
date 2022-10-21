describe('Mainpage check', () => {
  before(function() {
    cy.visit("https://testingautomation.nl")
  })

  it("verify the status of the site", function() {
    cy.request("/").should(function(response) {
      expect(response.status).to.eq(200)
    })
  })

  it("The site cointains 2 links", function() {
    cy.contains('qualitygate.nl'),
    cy.contains('qaconsultant.nl')
  })
})