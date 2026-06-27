import React from "react";
import { BoardMember } from "../types";
import { User, Trash2, Pencil } from "lucide-react";

interface DirectivosGridProps {
  members: BoardMember[];
  adminLoggedIn: boolean;
  onEdit?: (idx: number) => void;
  onDelete?: (id: string) => Promise<void>;
  deptType?: "evangelismo" | "instituto" | "junta";
}

export default function DirectivosGrid({
  members,
  adminLoggedIn,
  onEdit,
  onDelete,
  deptType = "evangelismo"
}: DirectivosGridProps) {
  
  if (members.length === 0) {
    return (
      <div className="col-span-full py-12 text-center text-slate-400 font-semibold italic text-xs">
        Ningún directivo registrado para este departamento todavía.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full" id={`directivos-grid-${deptType}`}>
      {members.map((mbr, index) => {
        // Dynamic badge color depending on type
        const badgeBg = deptType === "instituto" ? "bg-orange-50 text-orange-700" : "bg-purple-50 text-purple-700";

        return (
          <div
            key={mbr.id || index}
            className={`flex flex-col bg-slate-50/50 hover:bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 shadow-3xs overflow-hidden relative group/mbrCard transition-all duration-300 ${
              adminLoggedIn ? "border-2 border-dashed border-purple-400" : ""
            }`}
          >
            {/* Admin Controls */}
            {adminLoggedIn && (
              <div className="absolute top-1 right-1 flex items-center gap-0.5 sm:gap-1 z-20 opacity-90 sm:opacity-0 sm:group-hover/mbrCard:opacity-100 transition-opacity duration-300">
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    if (!window.confirm("¿Seguro de remover este directivo?")) return;
                    if (mbr.id && onDelete) {
                      await onDelete(mbr.id);
                    }
                  }}
                  className="p-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition cursor-pointer"
                  title="Eliminar directivo"
                >
                  <Trash2 className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onEdit) onEdit(index);
                  }}
                  className="p-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition cursor-pointer"
                  title="Editar directivo"
                >
                  <Pencil className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                </button>
              </div>
            )}

            {/* Portrait Frame container */}
            <div className="pt-2 sm:pt-4 pb-1 sm:pb-2 flex justify-center items-center select-none">
              <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-lg sm:rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white flex-shrink-0 relative flex items-center justify-center">
                {mbr.photoUrl ? (
                  <img
                    src={mbr.photoUrl}
                    alt={`${mbr.nombre} ${mbr.apellido || ""}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain group-hover/mbrCard:scale-105 transition-transform duration-500 relative z-10 p-0.5"
                  />
                ) : (
                  <User className="h-5 w-5 sm:h-7 sm:w-7 text-slate-300 stroke-1" />
                )}
              </div>
            </div>

            {/* Text description details */}
            <div className="p-1.5 sm:p-3 text-center bg-white border-t border-slate-50 space-y-0.5 flex-grow flex flex-col justify-center min-h-[48px] sm:min-h-[56px]">
              <div className={`text-[7px] sm:text-[9px] font-black uppercase font-mono tracking-wider leading-none ${badgeBg} py-0.5 rounded px-1 self-center max-w-full truncate`}>
                {mbr.cargo}
              </div>
              <h6 className="text-[9px] sm:text-[11px] font-black text-slate-900 font-display leading-tight line-clamp-2">
                {mbr.nombre} {mbr.apellido || ""}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
