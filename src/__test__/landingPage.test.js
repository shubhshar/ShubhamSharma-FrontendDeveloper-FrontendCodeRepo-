import {render, screen} from "@testing-library/react"
import LandingPage from "../landingPage/landingPage"

describe("Test landingpage component",()=>{
  test("render landing page with button",async ()=>{
    render(<LandingPage/>);
    
    const butttonList = await screen.findAllByRole("button");
    expect(butttonList).toHaveLength(1)
  })
})