import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
    
  it("Should Search Res List for burger text input", async () => {
    await act(async () => {
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        );
      });

    const cardsBeforeSearch = screen.getAllByTestId("restCard")  

    expect(cardsBeforeSearch.length).toBe(20);
  
    const searchBtn = screen.getByRole("button", { name: "Search" });
  
    const searchInput = screen.getByTestId("searchInput");
  
    fireEvent.change(searchInput, { target: { value: "ice cream" } });
  
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("restCard");

    expect(cardsAfterSearch.length).toBe(5)
  
  });
    
  it("Should filter Top Rated Restaurant", async () => {
    await act(async () => {
        render(
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        );
      });

    const cardsBeforefilter = screen.getAllByTestId("restCard")  

    expect(cardsBeforefilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("restCard");
    expect(cardsAfterFilter.length).toBe(13)
  
    
  });