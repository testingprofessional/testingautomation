describe('Buttons page check', () => {
    before(function() {
      cy.visit("../.circleci/sub/buttons.html")
    })

    it("Verify the status of the select page", function() {
        cy.request("/sub/buttons.html").should(function(response) {
          expect(response.status).to.eq(200)
        })
      })

    it("Verify the functionality of the button clicks", function() {
      cy.get('#button1').click()
    })
  })
