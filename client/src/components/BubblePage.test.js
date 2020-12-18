import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColorsAxios } from "../utils/fetchColorsAxios";
import { axiosWithAuth } from "../utils/fetchColorsAxios";

jest.mock("../utils/fetchColorsAxios");

test("Fetches data and renders the bubbles", async() => {
  const colors = [
    {
      color: "blue",
      code: {
        hex: "#6093ca"
      },
      id: 10
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    },
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
  ];

  const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";
localStorage.setItem("token", token);

fetchColorsAxios.mockResolvedValue(colors);

const { getByText } = render(<BubblePage />);

await waitFor(() =>expect(getByText(/aquamarine/i)).toBeTruthy());

// expect(getByText(/aquamarine/i)).toBeTruthy();
});
