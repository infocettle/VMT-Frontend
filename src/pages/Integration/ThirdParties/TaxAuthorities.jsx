import { baseUrl } from '@/App';
import BaseThirdParty from './BaseThirdParty';


const TaxAuthorities = () => {
    const taxAuthoritiesUrl = `${baseUrl}/integration/third-parties/tax-authorities`


    return (
        <BaseThirdParty
            thirdPartyUrl={taxAuthoritiesUrl}
            queryKey={"taxAuthorities"}
            title={"Tax Authorities"}
            buttonTitle={"Add Authority"}
            dialogTitle={"Add New Authority"}
            editDialogTitle={"Edit Authority"}
        />
    )
}

export default TaxAuthorities
