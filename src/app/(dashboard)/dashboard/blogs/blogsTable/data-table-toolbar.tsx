import { Input } from "@/components/ui//input";
import { Table } from "@tanstack/react-table";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    setFiltering: (filtering: string) => void;
    filtering: string;
}

export function DataTableToolbar<TData>({
    table,
    filtering,
    setFiltering,
}: DataTableToolbarProps<TData>) {
    return (
        <div className="flex justify-between py-5">
            <section className="flex w-full items-center justify-between gap-2 min-[424px]:justify-start min-lg:gap-5">
                <div className="min-sm:w-[350px] min-md:w-[250px] min-lg:w-[400px]">
                    <Input
                        placeholder="Find by blog title..."
                        value={filtering}
                        onChange={(event) => setFiltering(event.target.value)}
                        className="h-10 w-full focus-visible:border-primary focus-visible:ring-0"
                    />
                </div>
            </section>

            <div className="hidden min-[425px]:block">
                <DataTableViewOptions table={table} />
            </div>
        </div>
    );
}
