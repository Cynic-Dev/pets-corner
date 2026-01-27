import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';
import { User, CreditCard, Star, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Profile() {
  const { user, profile, refreshProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    phone: profile?.phone || '',
    address: profile?.address || '',
  });

  const handleSave = async () => {
    if (!user) return;
    setIsSaving(true);

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: formData.full_name.trim(),
        phone: formData.phone.trim() || null,
        address: formData.address.trim() || null,
      })
      .eq('user_id', user.id);

    if (error) {
      toast.error('Failed to update profile');
    } else {
      toast.success('Profile updated');
      await refreshProfile();
      setIsEditing(false);
    }
    setIsSaving(false);
  };

  return (
    <Layout>
      <div className="container max-w-2xl py-8">
        <h1 className="mb-8 font-display text-3xl font-bold">My Profile</h1>

        {/* Profile Card */}
        <div className="mb-6 rounded-xl border border-border bg-card p-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold">{profile?.full_name}</h2>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="123 Main St, City"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Phone</span>
                <span>{profile?.phone || 'Not set'}</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Address</span>
                <span>{profile?.address || 'Not set'}</span>
              </div>
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            </div>
          )}
        </div>

        {/* Loyalty Card */}
        <div className="rounded-xl hero-gradient p-6 text-primary-foreground">
          <div className="mb-4 flex items-center gap-3">
            <CreditCard className="h-6 w-6" />
            <h3 className="font-display text-lg font-bold">Loyalty Card</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Card Number</p>
              <p className="font-mono text-lg font-bold">{profile?.loyalty_card_number}</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80">Points</p>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="font-display text-2xl font-bold">{profile?.loyalty_points || 0}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account Info */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 font-display font-bold">Account Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email</span>
              <span>{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account Created</span>
              <span>{user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
