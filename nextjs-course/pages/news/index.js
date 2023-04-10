import Link from 'next/link';

import { Fragment } from "react";


function NewsPage() {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                
                <li><Link href='/news/test'>
                    NextJS Is A Greate Framework
                </Link></li>
            </ul>
        </Fragment>
        
    )
}

export default NewsPage;