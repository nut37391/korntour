import React, { useMemo } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { countries } from "../data/countries";

// Searchable country picker for phone numbers: shows "Thailand (+66)", searches
// by name or code, and reports the selected ISO code (keys must be unique since
// several countries share +1 / +7).
const CountryCodeSelect = ({ lang = "en", selectedKey, onSelectionChange, ...props }) => {
  const items = useMemo(() => {
    let names;
    try {
      names = new Intl.DisplayNames([lang], { type: "region" });
    } catch {
      names = null;
    }
    return countries
      .map(([iso, en, dial]) => ({ iso, dial, name: names?.of(iso) || en }))
      .sort((a, b) => a.name.localeCompare(b.name, lang));
  }, [lang]);

  return (
    <div className="flex flex-auto pb-5">
      <Autocomplete
        {...props}
        defaultItems={items}
        selectedKey={selectedKey}
        onSelectionChange={onSelectionChange}
        variant="bordered"
        size="lg"
        radius="sm"
        labelPlacement="outside"
        fullWidth
        className="text-black"
      >
        {(item) => (
          <AutocompleteItem key={item.iso} textValue={`${item.name} (${item.dial})`}>
            <div className="flex items-center justify-between gap-3">
              <span>{item.name}</span>
              <span className="text-gray-500">{item.dial}</span>
            </div>
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export const dialCodeOf = (iso) => countries.find(([code]) => code === iso)?.[2] ?? "";

export default CountryCodeSelect;
