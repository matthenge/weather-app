import React from "react";
import { render } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

enum Language {
  EN = "en",
  SW = "sw",
}

// let renderedHook: RenderHookResult<unknown, { language: Language }>;

const LanguageConsumer: React.FC = () => {
  return <div>Current Language: English</div>;
};

describe("LanguageContext", () => {
  it("provides language context", () => {
    const { getByText } = render(
      <LanguageProvider>
        <LanguageConsumer />
      </LanguageProvider>,
    );

    // const { language } = useLanguage();
    expect(getByText(/Current Language: English/)).toBeInTheDocument();
  });
});
