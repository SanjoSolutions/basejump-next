import {createClient} from "@/lib/supabase/server";
import DashboardHeader from "@/components/dashboard/dashboard-header";

export default async function PersonalAccountDashboard({children, params: {accountSlug}}) {
    const supabaseClient = createClient();

    const {data: teamAccount, error} = await supabaseClient.rpc('get_account_by_slug', {
        slug: accountSlug
    });

    const navigation = [
        {
            name: 'Overview',
            href: `/dashboard/${accountSlug}`,
        },
        {
            name: 'Settings',
            href: `/dashboard/${accountSlug}/settings`
        }
    ]

    return (
        <>
            <DashboardHeader accountId={teamAccount.account_id} navigation={navigation}/>
            <div className="w-full p-8">{children}</div>
        </>
    )

}