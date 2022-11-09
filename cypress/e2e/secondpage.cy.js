//DUMMY
describe('Second page check', () => {
    before(function() {
      cy.visit("/")
    })
  
    beforeEach(function() {
      cy.fixture("sampleData").then(function(sampleData) {
        this.sampleData = sampleData
      })
    })
  
    it("Verify the status of the site", function() {
      cy.request("/").should(function(response) {
        expect(response.status).to.eq(200)
      })
    })
  
    it("The site contains 2 links", function() {
      cy.contains('qualitygate.nl'),
      cy.contains('qaconsultant.nl'),
      cy.contains('testing').should('not.exist')
    })
  
    it("Verfiy the image on the site", function() {
      console.log(this.sampleData, "Plan")
      cy.get("img")
        .should("have.attr", "src")
        .and("include", this.sampleData.imageName)
    })
  })