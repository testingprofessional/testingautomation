describe('API testing', () => {

    it("Verify the status of the selected endpoint", function() {
        cy.request({
          method: 'GET',
          url: 'https://api.agify.io/?name=meelad',
        }).then( ({ status }) => {
          expect(status).to.eq(200)
        })
      })
  
    it("Verify the body of the response", function() {
      cy.request({
        method: 'GET',
        url: 'https://api.agify.io/?name=meelad',
      }).should((response) => {
        cy.log(JSON.stringify(response.body))
        expect(response.body.age).to.not.be.null
        expect(response.body.age).to.eq(32)
        expect(response.body.count).to.eq(21)
        expect(response.body.name).to.eq("meelad")
      })
    })
})