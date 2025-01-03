import {
    useMemo,
    useRef,
    useState,
} from "react";

import * as Y from "yjs";
import { IndexeddbPersistence } from "y-indexeddb";
import { EditorContent, useEditor } from "@tiptap/react";
import { useAtom } from "jotai";
import { pageEditorAtom } from "@/editor/atoms/editor-atoms";
import { mainExtensions } from "@/editor/extensions/extensions";
import { EditorBubbleMenu } from "@/editor/components/bubble-menu/bubble-menu";
import TableMenu from "@/editor/components/table/table-menu";
import TableCellMenu from "@/editor/components/table/table-cell-menu";
import CalloutMenu from "@/editor/components/callout/callout-menu";
import ExcalidrawMenu from "@/editor/components/excalidraw/excalidraw-menu";
import DrawioMenu from "@/editor/components/drawio/drawio-menu";
import LinkMenu from "@/editor/components/link/link-menu";
import EditorSkeleton from "@/editor/components/editor-skeleton";
import { handleFileDrop, handleFilePaste } from "@/editor/components/common/file-upload-handler";

export const Editor = () => {
    const documentName = 'editor-document';

    const [, setEditor] = useAtom(pageEditorAtom);
    const [isLocalSynced, setLocalSynced] = useState(false);
    const ydoc = useMemo(() => new Y.Doc(), []);
    const menuContainerRef = useRef(null);


    // @ts-ignore
    const localProvider = useMemo(() => {
        const provider = new IndexeddbPersistence(documentName, ydoc);

        provider.on("synced", () => {
            setLocalSynced(true);
        });

        return provider;
    }, [ydoc]);

    const extensions = [
        ...mainExtensions
    ];

    const editor = useEditor(
        {
            extensions,
            editorProps: {
                handleDOMEvents: {
                    keydown: (_view, event) => {
                        if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
                            const slashCommand = document.querySelector("#slash-command");
                            if (slashCommand) {
                                return true;
                            }
                        }
                    },
                },
                handlePaste: (view, event) => handleFilePaste(view, event, documentName),
                handleDrop: (view, event, _slice, moved) =>
                    handleFileDrop(view, event, moved, documentName),
            },
            onCreate({ editor }) {
                if (editor) {
                    // @ts-ignore
                    setEditor(editor);
                    editor.storage.pageId = documentName;
                }
            },
        },
        [],
    );

    const isSynced = isLocalSynced;

    return isSynced ? (
        <div className="editor-canvas">
            {isSynced && (
                <div ref={menuContainerRef}>
                    <EditorContent editor={editor} />

                    {editor && editor.isEditable && (
                        <div>
                            <EditorBubbleMenu editor={editor} />
                            <TableMenu editor={editor} />
                            <TableCellMenu editor={editor} appendTo={menuContainerRef} />
                            <CalloutMenu editor={editor} />
                            <ExcalidrawMenu editor={editor} />
                            <DrawioMenu editor={editor} />
                            <LinkMenu editor={editor} appendTo={menuContainerRef} />
                        </div>
                    )}
                </div>
            )}
            <div onClick={() => editor?.commands.focus('end')} style={{ paddingBottom: '20vh' }}></div>
        </div>
    ) : (
        <EditorSkeleton />
    );
}
