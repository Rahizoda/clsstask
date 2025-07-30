import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function Form() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button
            variant="outline"
            className="mt-5 mb-5 hover:scale-105 hover:shadow-lg transition-transform"
          >
            Add
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <form
              className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl space-y-4"
              onSubmit={() => e.preventDefault()}
            >
              <h2 className="text-xl font-semibold text-gray-700">Sign In</h2>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <DialogClose asChild>
                <Button className="w-full" type="submit">
                  Login
                </Button>
              </DialogClose>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
