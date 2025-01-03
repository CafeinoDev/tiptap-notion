import {
    BubbleMenu as BaseBubbleMenu,
    findParentNode,
    posToDOMRect,
} from "@tiptap/react";
import { useCallback } from "react";
import { sticky } from "tippy.js";
import { Node as PMNode } from "prosemirror-model";
import {
    EditorMenuProps,
    ShouldShowProps,
} from "@/editor/components/table/types/types.ts";
import { ActionIcon, Tooltip } from "@mantine/core";
import {
    IconLayoutAlignCenter,
    IconLayoutAlignLeft,
    IconLayoutAlignRight,
} from "@tabler/icons-react";
import { NodeWidthResize } from "@/editor/components/common/node-width-resize.tsx";

export function VideoMenu({ editor }: EditorMenuProps) {
    const shouldShow = useCallback(
        ({ state }: ShouldShowProps) => {
            if (!state) {
                return false;
            }

            return editor.isActive("video");
        },
        [editor],
    );

    const getReferenceClientRect = useCallback(() => {
        const { selection } = editor.state;
        const predicate = (node: PMNode) => node.type.name === "video";
        const parent = findParentNode(predicate)(selection);

        if (parent) {
            const dom = editor.view.nodeDOM(parent?.pos) as HTMLElement;
            return dom.getBoundingClientRect();
        }

        return posToDOMRect(editor.view, selection.from, selection.to);
    }, [editor]);

    const alignVideoLeft = useCallback(() => {
        editor
            .chain()
            .focus(undefined, { scrollIntoView: false })
            .setVideoAlign("left")
            .run();
    }, [editor]);

    const alignVideoCenter = useCallback(() => {
        editor
            .chain()
            .focus(undefined, { scrollIntoView: false })
            .setVideoAlign("center")
            .run();
    }, [editor]);

    const alignVideoRight = useCallback(() => {
        editor
            .chain()
            .focus(undefined, { scrollIntoView: false })
            .setVideoAlign("right")
            .run();
    }, [editor]);

    const onWidthChange = useCallback(
        (value: number) => {
            editor
                .chain()
                .focus(undefined, { scrollIntoView: false })
                .setVideoWidth(value)
                .run();
        },
        [editor],
    );

    return (
        <BaseBubbleMenu
            editor={editor}
            pluginKey={`video-menu}`}
            updateDelay={0}
            tippyOptions={{
                getReferenceClientRect,
                offset: [0, 8],
                zIndex: 99,
                popperOptions: {
                    modifiers: [{ name: "flip", enabled: false }],
                },
                plugins: [sticky],
                sticky: "popper",
            }}
            shouldShow={shouldShow}
        >
            <ActionIcon.Group className="actionIconGroup">
                <Tooltip position="top" label="Align video left">
                    <ActionIcon
                        onClick={alignVideoLeft}
                        size="lg"
                        aria-label="Align video left"
                        variant={
                            editor.isActive("video", { align: "left" }) ? "light" : "default"
                        }
                    >
                        <IconLayoutAlignLeft size={18} />
                    </ActionIcon>
                </Tooltip>

                <Tooltip position="top" label="Align video center">
                    <ActionIcon
                        onClick={alignVideoCenter}
                        size="lg"
                        aria-label="Align video center"
                        variant={
                            editor.isActive("video", { align: "center" })
                                ? "light"
                                : "default"
                        }
                    >
                        <IconLayoutAlignCenter size={18} />
                    </ActionIcon>
                </Tooltip>

                <Tooltip position="top" label="Align video right">
                    <ActionIcon
                        onClick={alignVideoRight}
                        size="lg"
                        aria-label="Align video right"
                        variant={
                            editor.isActive("video", { align: "right" }) ? "light" : "default"
                        }
                    >
                        <IconLayoutAlignRight size={18} />
                    </ActionIcon>
                </Tooltip>
            </ActionIcon.Group>

            {editor.getAttributes("video")?.width && (
                <NodeWidthResize
                    onChange={onWidthChange}
                    value={parseInt(editor.getAttributes("video").width)}
                />
            )}
        </BaseBubbleMenu>
    );
}

export default VideoMenu;
