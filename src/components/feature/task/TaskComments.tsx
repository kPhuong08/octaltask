import { Task } from '@/types/task';
import { format } from 'date-fns';
import {
    Send,
    Trash2
} from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';

interface TaskCommentsProps {
    task: Task;
    currentUserId: string;
    currentUserName: string;
    currentUserPhoto?: string;
    onAddComment: (taskId: string, content: string) => void;
    onDeleteComment: (commentId: string) => void;
}

export function TaskComments({
    task,
    currentUserId,
    //currentUserName,
    //currentUserPhoto,
    onAddComment,
    onDeleteComment,
}: TaskCommentsProps) {
    const [newComment, setNewComment] = useState('');
    const [deletingCommentId, setDeletingCommentId] = useState<string | null>(null);
    const comments = task.comments || [];

    const handleSubmitComment = () => {
        if (newComment.trim()) {
            onAddComment(task.id, newComment);
            setNewComment('');
        }
    };

    const handleDeleteComment = (commentId: string) => {
        setDeletingCommentId(commentId);
        onDeleteComment(commentId);
        // Clear the deleting state after a short delay to show animation
        setTimeout(() => setDeletingCommentId(null), 300);
    };

    const formatTime = (dateString: string) => {
        try {
            return format(new Date(dateString), 'MMM d, h:mm a');
        } catch (error) {
            return dateString;
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* Comments list */}
            <div className="flex-grow mb-2 space-y-2 overflow-y-auto">
                {comments.map(comment => (
                    <div
                        key={comment.id}
                        className={`flex gap-2 group rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/30 p-2 transition-all ${deletingCommentId === comment.id ? 'opacity-50 scale-95' : ''}`}
                    >
                        <Avatar className="h-7 w-7 mt-0.5 flex-shrink-0">
                            <AvatarImage src={comment.userPhotoUrl || '/avatar-placeholder.png'} alt={comment.userName} />
                            <AvatarFallback>{comment.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-sm font-medium">{comment.userName}</span>
                                    <span className="ml-2 text-xs text-gray-400">{formatTime(comment.createdAt)}</span>
                                </div>
                                {comment.userId === currentUserId && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-6 h-6 transition-colors rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-50 hover:text-red-500"
                                        onClick={() => handleDeleteComment(comment.id)}
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                )}
                            </div>
                            <p className="text-sm">{comment.content}</p>
                        </div>
                    </div>
                ))}

                {comments.length === 0 && (
                    <div className="py-3 text-xs italic text-center text-gray-400 dark:text-gray-500">
                        No comments yet
                    </div>
                )}
            </div>

            {/* Add comment - fixed at bottom */}
            <div className="pt-2 mt-1 border-t border-gray-100 dark:border-gray-700">
                <div className="relative">
                    <textarea
                        className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm h-[50px] pr-10 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmitComment();
                            }
                        }}
                    />
                    <div className="absolute bottom-2 right-2">
                        <Button
                            size="icon"
                            variant="ghost"
                            className="w-6 h-6 p-0 text-blue-500 hover:text-blue-600"
                            onClick={handleSubmitComment}
                            disabled={!newComment.trim()}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
