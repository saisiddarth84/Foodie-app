import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { withPromoted } from "../RestaurantCard"
import MOCK_DATA_PROMOTED from "../mocks/resCardPromoted.json"

it("should render Restaurant Cart Component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();
})

it("should render Restaurant Card component with Top Rated label" , () => {
    const RestaurantCardPromoted = withPromoted(RestaurantCard);

    render(<RestaurantCardPromoted resData={MOCK_DATA_PROMOTED} />)

    const name = screen.getByText("NIC Ice Creams");

    expect(name).toBeInTheDocument();
})