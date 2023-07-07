import React from "react";
import {render,screen} from '@testing-library/react'
import Square from "../components/Square"

describe('<Square/>',() => {
describe("Rendering of square component",() => {

    it('should render sqaure componenet',() => {
          render(<Square/>)
          const button = screen.getByRole('button')
          expect(button).toBeInTheDocument()
    })

   })
})

