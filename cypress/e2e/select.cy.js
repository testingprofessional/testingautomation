describe('Select page check', () => {
    before(function() {
      cy.visit("/sub/select.html")
    })
  
    it("Verify the status of the select page", function() {
      cy.request("/sub/select.html").should(function(response) {
        expect(response.status).to.eq(200)
      })
    })

    it("Verify the functionality of the existing container class", function() {
      cy.get('div').should('have.class', 'container')
    })
  
    it("Verify the functionality of the basic select element", function() {
      cy.get('select#cars').select('Opel').should('have.value', 'opel')
    })

    it("Verify the functionality of the basic checkbox element", function() {
      cy.get('[type="checkbox"]').check('Dogs').should('have.value', 'Dogs')
    })
  })
