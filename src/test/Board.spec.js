import { fireEvent, render,screen } from "@testing-library/react"
import Board from "../components/Board"

describe('<Board/>',() => {

describe("rendering of board",() => {

    it('should contain 9 squares',() => {
       render(<Board/>)
     
       const squares = screen.getAllByRole('button')
       expect(squares.length).toBe(9)

    })

    it('should intially contain empty sqaures',() => {
        render(<Board/>)
  
       const squares = screen.getAllByRole('button')  
       squares.forEach(square => {
           expect(square.innerHTML).toBe('')
       })

    })
})

describe('testing board functionality',() => {
    it('should display correct value when player clicks on an empty square',() => {
        render(<Board/>)
        
        const firstSquare = screen.getByTestId('square_0')
        fireEvent.click(firstSquare)
        expect(firstSquare.innerHTML).toBe('X')
    })

    it('should start with X playing first and then Y should play second move',() => {

        render(<Board/>)

        const firstSquare = screen.getByTestId('square_0')
        const secondSquare = screen.getByTestId('square_1')

        fireEvent.click(firstSquare) 
        fireEvent.click(secondSquare) 


        expect(firstSquare.innerHTML).toBe('X')
        expect(secondSquare.innerHTML).toBe('O')

    })

    it('should not allow overwriting squares which are already marked',() => {

        render(<Board/>)

        const firstSquare = screen.getByTestId('square_0')
        const secondSquare = screen.getByTestId('square_1')

        fireEvent.click(firstSquare) 
        fireEvent.click(secondSquare) 
        fireEvent.click(secondSquare) 

        expect(secondSquare.innerHTML).toBe('O')

    })

    it('should declare the player which fills all squares in a row as winner',() => {
        render(<Board/>)

        const firstSquare = screen.getByTestId('square_0')
        const secondSquare = screen.getByTestId('square_1')
        const thirdSquare = screen.getByTestId('square_2')
        const fourthSquare = screen.getByTestId('square_3')
        const fifthSquare = screen.getByTestId('square_4')

        fireEvent.click(firstSquare)  
        fireEvent.click(fourthSquare) 
        fireEvent.click(secondSquare) 
        fireEvent.click(fifthSquare) 
        fireEvent.click(thirdSquare) 

        expect(screen.getByTestId('game-status').innerHTML).toBe('Winner: X')
    })

    it('should declare the player which fills all squares in a column as winner',() => {
       
        render(<Board/>)

        const firstSquare = screen.getByTestId('square_0')
        const secondSquare = screen.getByTestId('square_1')
        const thirdSquare = screen.getByTestId('square_2')
        const fourthSquare = screen.getByTestId('square_3')
        const fifthSquare = screen.getByTestId('square_4')
        const seventhSquare = screen.getByTestId('square_6')

        fireEvent.click(secondSquare) 
        fireEvent.click(firstSquare) 
        fireEvent.click(thirdSquare) 
        fireEvent.click(fourthSquare) 
        fireEvent.click(fifthSquare) 
        fireEvent.click(seventhSquare) 

        
        
        expect(screen.getByTestId('game-status').innerHTML).toBe('Winner: O')
    })

    it('should declare player which fills all squares in diagonal as winner',() => {

        render(<Board/>)

        const firstSquare = screen.getByTestId('square_0')
        const secondSquare = screen.getByTestId('square_1')
        const thirdSquare = screen.getByTestId('square_2')
        const fifthSquare = screen.getByTestId('square_4')
        const ninthSquare = screen.getByTestId('square_8')
        
        fireEvent.click(firstSquare) 
        fireEvent.click(secondSquare) 
        fireEvent.click(fifthSquare) 
        fireEvent.click(thirdSquare) 
        fireEvent.click(ninthSquare) 

        expect(screen.getByTestId('game-status').innerHTML).toBe('Winner: X')
    })

    it('should not allow anymore moves to be played after winner is decided',() => {
        render(<Board/>)

        const firstSquare = screen.getByTestId('square_0')
        const secondSquare = screen.getByTestId('square_1')
        const thirdSquare = screen.getByTestId('square_2')
        const fifthSquare = screen.getByTestId('square_4')
        const ninthSquare = screen.getByTestId('square_8')
        const sixthSquare = screen.getByTestId('square_5')

        fireEvent.click(firstSquare) 
        fireEvent.click(secondSquare)
        fireEvent.click(fifthSquare) 
        fireEvent.click(thirdSquare) 
        fireEvent.click(ninthSquare) 
 
        fireEvent.click(sixthSquare) 

        expect(screen.getByTestId('game-status').innerHTML).toBe('Winner: X')

        expect(sixthSquare.innerHTML).toBe('')
    })

})
})