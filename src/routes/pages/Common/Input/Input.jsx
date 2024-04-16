import React from "react";

import './Input.css';

export const Input = ({
    userId,
    userPw,

    userName,
    userNickName,
    userPhone,
}) => {

    return (
        <div className="input">
            <div className="input-group">
                <label showafter="아이디(이메일)">아이디(이메일)</label>
                <div className="input-btn">
                    <input type="text" placeholder="아이디(이메일)를 입력해주세요" />
                    <button title="중복확인">
                        <span style={{ color: 'rgb(163, 167, 170)' }}>중복확인</span>
                    </button>
                </div>
                <span style={{ color: '#b52609', fontWeight: 'bold' }}>이메일 형식이 맞지 않습니다</span>
                <span></span>
            </div>

            <div className="input-group">
                <label showafter="비밀번호">비밀번호</label>
                <input type="password" placeholder="비밀번호를 입력해주세요" />
                <span>비밀번호는 8자 이상, 특수문자를 하나 이상 포함해야 합니다</span>
            </div>
            <div className="input-group">
                <label showafter="비밀번호 확인">비밀번호 확인</label>
                <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
                <span style={{ color: '#b52609', fontWeight: 'bold' }}>비밀번호를 다시 입력해주세요</span>
                <span></span>
            </div>

            <div className="input-group">
                <label showafter="이름">이름</label>
                <input type="text" placeholder="이름을 입력해주세요" />
                <span style={{ color: '#b52609', fontWeight: 'bold' }}>필수 항목 입니다</span>
                <span></span>
            </div>

            <div className="input-group">
                <label showafter="예명">예명</label>
                <input type="text" placeholder="예명을 입력해주세요" />
            </div>

            <div className="input-group">
                <label showafter="휴대폰 번호">휴대폰 번호</label>
                <div className="input-btn">
                    <input type="text" placeholder="휴대폰 번호를 입력해주세요" />
                    <button title="인증번호 전송" style={{ backgroundColor: '#FA709A', borderColor: '#FA709A' }}>
                        <span style={{ color: 'white' }}>인증번호 전송</span>
                    </button>
                </div>
                <span style={{ color: '#b52609', fontWeight: 'bold' }}>필수 항목 입니다</span>
            </div>

            <div className="counselor-category">
                <span className="category-label" style={{ fontSize: '.9rem', fontWeight: '700' }}>분야</span>
                <select className="counselor-category-select" name="category">
                    <option value="타로">타로</option>
                    <option value="신점">신점</option>
                    <option value="사주">사주</option>
                </select>
            </div>

            <div className="select-image-box">
                <div className="select-image-title">프로필 사진 등록</div>
                <div className="select-image-input">
                    <img className="profile-images" src={process.env.PUBLIC_URL + './logo192.png'} alt="프로필 사진 미리보기" />
                    <label for="image" className="select-image">
                        <span>프로필 사진 선택</span>
                    </label>
                    <input id="image" type="file" accept="image/*" name="image" style={{display:'none'}} />
                </div>
            </div>

        </div>
    )
}