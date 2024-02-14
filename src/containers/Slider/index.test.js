import { render, screen, waitFor } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findByText("janvier");
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});

describe("Slider component", () => {
  it("displays images in descending order", async () => {
    jest.spyOn(api, "loadData").mockResolvedValue(data);

    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );

    await waitFor(() => screen.getAllByAltText("forum"));

    const images = screen.getAllByAltText("forum");

    for (let i = 0; i < images.length - 1; i++) {
      const currentImageDate = new Date(data.focus[i].date);
      const nextImageDate = new Date(data.focus[i + 1].date);
      expect(currentImageDate >= nextImageDate).toBe(true);
    }
  });
});