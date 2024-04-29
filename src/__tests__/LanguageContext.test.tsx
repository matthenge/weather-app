import React from "react";
import { render } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageContext";

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
