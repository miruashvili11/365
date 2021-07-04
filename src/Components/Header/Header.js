import Button from "./Button";
import Search from "./Search";
import "./header.css";
import SelectAll from '../Header/SelectAll'
import ClearButton from "./ClearButton";
const Header = ({data, setData, allData, setAllData, searchQuery, setSearchQuery, result, setResult,
                  selectedItems,unselectAll,sellectAllProducts
}) => {
  return (
    <>
      <header className={"header"}>
        <div className={"header__content"}>
          < SelectAll
              sellectAllProducts={sellectAllProducts}
          />
          <span className={"header__selection"}>
             selected {selectedItems.length} out of {data.length} products
          </span>
            <div className="Clear">
                {selectedItems.length ? <ClearButton unselectAll={unselectAll}/> : null}
            </div>
        </div>
        <div className={"header__content"}>
          <Search
              data={data}
              setData={setData}
              allData={allData}
              setAllData={setAllData}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              result={result}
              setResult={setResult}
          />
          <Button content={"add to inventory"} className={'Add_To'}/>
          <i class="far fa-question-circle Header__Icon"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
