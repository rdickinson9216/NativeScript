import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { SearchBar } from "tns-core-modules/ui/search-bar";

export class Issue5039ViewModel extends Observable {

    private _items = ["apple", "apple cider", "apple pie", "orange", "orange juice", "strawberry", "blueberry"];
    public items = new ObservableArray();

    constructor(private _searchBar: SearchBar) {
        super();
        this.items.push(this._items);
    }

    onSubmit() {
        this.filter(this._searchBar.text);
    }

    clearSearch() {
        this.filter();
    }

    filter(value: string = "") {
        this.items.splice(0, this.items.length); // remove all items
        this.items.push(this._items.filter(i => -1 !== i.indexOf(value)));
    }
}
