import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Pokemon from "./Pokemon";
import { getPokemon, getPokemonImgUrl } from "./fetchPokemonHelpers";

vi.mock("./fetchPokemonHelpers");

const mockPokemonData = [
  { name: "Charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
];
const mockPokemonImgUrl = "https://example.com/charmander.png";

getPokemon.mockResolvedValue(mockPokemonData);
getPokemonImgUrl.mockResolvedValue(mockPokemonImgUrl);

it("displays loading screen", () => {
  render(<Pokemon offset={1} />);

  expect(screen.getByText("Loading")).toBeInTheDocument();
  expect(document.querySelector(".poke-card")).toBeInTheDocument();
});

it("displays fetched data", async () => {
  render(<Pokemon offset={1} />);

  const img = await screen.findByRole("img");

  expect(screen.getByText("Charmander")).toBeInTheDocument();
  expect(getPokemonImgUrl.mock.calls[0][0]).toBe(
    "https://pokeapi.co/api/v2/pokemon/4/"
  );
  expect(img.src).toEqual("https://example.com/charmander.png");
});
